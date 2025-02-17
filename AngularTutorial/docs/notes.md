# Angular Concepts: Components, Templates, and Services

## **Components**
- **A component is a merging of two pieces: the display and the logic to go with it.**
- Metadata is defined inside the decorator.

## **Templates**
- **Templates are the display of a component.**
- Each component has a template.

## **Data Binding in Angular**

### **1. Interpolation and Property Binding (One-Way)**

#### **1.1 Interpolation (`{{ }}`)**
- Allows you to bind and display **string values or the result of expressions** in the template.
    
    ```html
    <p>{{ expression }}</p>
    ```
    
- Supports **one-way data binding (component → template)**.
- Can evaluate **expressions** like method calls or property accesses.

#### **1.2 Property Binding (`[property]`)**
- Binds data from the component to a **DOM property** in the template.

    ```html
    <tag [property]="expression"></tag>
    ```

- Directly binds a component's property to a **DOM property**.
- Supports various types of properties such as `src`, `disabled`, and `hidden`.
- Provides better **performance and flexibility** compared to interpolation.

### **2. Event Binding in Angular**
- **Event Binding** allows you to handle user interactions such as clicks, key presses, or mouse events by binding DOM events to component methods.

    ```html
    <tag (event)="expression"></tag>
    ```

### **3. Two-Way Binding**
Two-way data binding allows you to **bind a component property to a form element** and automatically update both when either one changes.

- Two-way binding uses the directive **`ngModel`**, which is part of the **FormsModule**.

    ```html
    <input [(ngModel)]="property"/>
    ```

## **Directives in Angular**

### **1. Structural Directives**

#### **1.1 `*ngIf`**
- Conditionally adds or removes elements from the DOM based on a boolean expression.
- If the expression evaluates to `true`, Angular renders the element and its children; if `false`, Angular removes the element from the DOM entirely.

    ```typescript
    <div *ngIf="condition">Content to show if condition is true</div>
    ```

#### **1.2 `*ngFor`**
- Dynamically renders a list of elements by looping over an array or iterable data structure.

    ```typescript
    <tag *ngFor="let item of items">{{ item }}</tag>
    ```

### **2. Attribute Directives**

#### **2.1 `ngClass`**
- Dynamically assigns CSS classes to HTML elements based on expressions.

    ```typescript
    <tag [ngClass]="classExpression"></tag>
    ```

#### **2.2 `ngStyle`**
- Dynamically applies inline CSS styles to an HTML element.
- Allows binding a style object or key-value pairs directly in the template.

    ```typescript
    <div [ngStyle]="{'property': 'value'}">Styled Text</div>
    ```

## **Routing in Angular**

### **1. RouterOutlet**
- A directive that acts as a placeholder where Angular dynamically loads and displays routed components based on the active route.
- When you navigate to different routes, `RouterOutlet` renders the corresponding components defined in your route configuration.

### **2. RouterLink**
- Used to navigate between routes in your Angular application.
- Binds to anchor (`<a>`) elements and allows navigation without causing a full page reload.

## **Control Flow Improvements**

### **1. Conditional Rendering: `@if` Block**
- Replaces `*ngIf` for expressing conditional parts of the UI.

### **2. Switch Statements: `@switch` Block**
- Replaces `ngSwitch` with several benefits:
  - No container element required for the condition expression.
  - Supports template type-checking, including type narrowing.

### **3. Iteration: `@for` Block**
- Replaces `*ngFor` with enhanced features:
  - Requires a tracking expression to uniquely identify items in the collection.
  - Simplifies tracking by accepting a `track` expression.
  - Allows content display when the collection is empty with the `@empty` block.
  - Optimized for minimal DOM operations after collection modifications.

    ```typescript
    @for (item of items; track itemId($index, item)) {
      {{ item.name }}
    }
    ```

- With `NgFor`, loops over immutable data without `trackBy` are a common cause of performance bugs. Using the `@for` block helps mitigate this.
---
## **Signals and Change Detection**

### **Key Concepts**
- **Signals Trigger Change Detection:** Updating a signal using `signal.set()` automatically triggers Angular's change detection, even when `ChangeDetectionStrategy.OnPush` is used.
- **Template Re-Evaluation:** Once a signal updates, Angular re-renders the template, including changes to normal variables.
- **Efficient State Management:** Signals act as reactive primitives tightly integrated with Angular's rendering pipeline, ensuring efficient and automatic updates.

### **Linked Signals**
- **Linked signals** allow one signal's value to depend on other signals. Angular automatically re-evaluates the dependent signal whenever any source signals change.

#### **Example**
```typescript
fullName = linkedSignal({
  source: this.firstName,
  computation: (newVal, prevVal) => {
    debugger;
    const fullName = newVal + " " + this.lastName();
    return fullName;
  }
})
```
---

## Forms in Angular

## **1. Template-Driven Forms**

### **Overview**
- Template-driven forms rely on HTML templates to define form structure and logic.
- Ideal for simple forms and small-scale applications.

### **Example**
```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <label>Name:</label>
  <input type="text" name="name" [(ngModel)]="user.name" required>

  <label>Email:</label>
  <input type="email" name="email" [(ngModel)]="user.email" required>

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```

### **Key Features**
- Built-in form state tracking (`touched`, `dirty`, `valid`).
- `#userForm="ngForm"`: References the form in the template for validation.
- `[disabled]="userForm.invalid"`: Disables the submit button if the form is invalid.

---

## **2. Reactive Forms**

### **Overview**
- Best suited for complex forms with dynamic logic.
- Structured form logic defined in TypeScript, offering greater control over form validation and interactions.

### **Core Concepts**
- **FormGroup:** Represents the entire form structure.
- **FormControl:** Tracks input field values and validation state.
- **Validators:** Built-in validation functions (`required`, `email`, etc.).

### **Example**
```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
})
export class ReactiveFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted:', this.userForm.value);
    }
  }
}
```

### **Key Features**
- **Dynamic Form Handling:** Easily add or remove controls.
- **Validation Control:** Better control over validation logic.
- **Programmatic Access:** Access and manipulate form state directly in TypeScript.
---
### HttpClient Key Points
- Used for making HTTP requests (GET, POST, PUT, DELETE) in Angular.
- Needs to import HttpClientModule in AppModule/AppConfig
- Provides methods to easily handle API responses.
#### Why Inject HttpClient in Constructor
- Constructor is for service injection using dependency injection (DI).
- Helps set up services early before the component is fully ready.
- Keeps code clean by separating setup and task execution (ngOnInit()).
---
# **HTTP Client in Angular**

## **HttpClient Key Points**
- Used for making HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) in Angular.
- Requires importing `HttpClientModule` in `AppModule` or `AppConfig`.
- Provides methods to handle API responses efficiently.

### **Why Inject HttpClient in the Constructor?**
- The constructor is used for service injection via dependency injection (DI).
- It ensures services are set up before the component is fully ready.
- Helps maintain clean code by separating setup and execution logic (`ngOnInit()`).

---

## **API Requests in Angular**

### **1. GET Request**
Retrieves data from a server.
```typescript
getData() {
  this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe((data: any) => {
      console.log('GET Response:', data);
    });
}
```

### **2. POST Request**
Sends data to a server.
```typescript
createData() {
  const newUser = { name: 'John Doe', email: 'john.doe@example.com' };
  this.http.post('https://jsonplaceholder.typicode.com/users', newUser)
    .subscribe((response) => {
      console.log('POST Response:', response);
    });
}
```

### **3. PUT Request**
Updates an existing record.
```typescript
updateData() {
  const updatedUser = { name: 'John Updated', email: 'updated@example.com' };
  this.http.put('https://jsonplaceholder.typicode.com/users/1', updatedUser)
    .subscribe((response) => {
      console.log('PUT Response:', response);
    });
}
```

### **4. DELETE Request**
Removes a record from the server.
```typescript
deleteData() {
  this.http.delete('https://jsonplaceholder.typicode.com/users/1')
    .subscribe((response) => {
      console.log('DELETE Response:', response);
    });
}
```

---

# **Resource API in Angular**

- The **Resource API** was introduced to streamline the handling of asynchronous data in applications.
- **Reactive Data Handling:** Integrates with Angular’s signal-based reactivity model, ensuring seamless updates when data changes.
- **Simplified Asynchronous Operations:** Provides a structured approach to fetching and managing API data.

### **Example:**
```typescript
import { resource } from '@angular/core';

const userId = signal(1);

const userResource = resource({
  request: () => ({ id: userId() }),
  loader: async ({ request }) => {
    const response = await fetch(`https://api.example.com/users/${request.id}`);
    return response.json();
  },
});
```

---

# **Angular Lifecycle Flow**

1. `constructor()` - Initializes the component; used for dependency injection.
2. `ngOnChanges()` - Called when input-bound properties change.
3. `ngOnInit()` - Invoked after component initialization; ideal for initial data setup.
4. `ngDoCheck()` - Custom change detection logic.
5. `ngAfterContentInit()` / `ngAfterContentChecked()` - Handles projected content.
6. `ngAfterViewInit()` / `ngAfterViewChecked()` - Manages the component’s view and child views.
7. `ngOnDestroy()` - Cleanup logic like unsubscribing from observables.

---

# **Pipes in Angular**
- Pipes transform data directly within the template, allowing formatting and data manipulation without modifying the original data.
```html
{{ 'hello' | uppercase }}
```

### **Custom Pipe:**
Generate a custom pipe using:
```bash
ng generate pipe custom
```

#### **Example:**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText'
})
export class ReverseTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}
```

---

# **@Input and @Output Decorators**

- These decorators facilitate communication between parent and child components, enabling data transfer in both directions.

### **@Input Decorator**
Used to receive data from a parent component.
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ childData }}</p>`
})
export class ChildComponent {
  @Input() childData: string = '';
}
```

### **@Output Decorator**
Used to send data or events from a child component to a parent component.
```typescript
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendData()">Click Me</button>`
})
export class ChildComponent {
  @Output() notifyParent = new EventEmitter<string>();

  sendData() {
    this.notifyParent.emit('Hello from Child');
  }
}
```
---
# Auth Guard in Angular

Auth Guards in Angular help protect routes by restricting access based on authentication or authorization. They are used in the Angular Router to prevent users from accessing specific routes unless they meet certain conditions.

## Types of Route Guards in Angular
- **CanActivate** – Restricts access to a route based on authentication.
- **CanActivateChild** – Similar to CanActivate, but applies to child routes.
- **CanLoad** – Prevents lazy-loaded modules from loading unless the condition is met.
- **CanDeactivate** – Checks if the user can leave a route (useful for unsaved form changes).
- **Resolve** – Pre-fetches data before navigating to a route.

```bash
ng generate guard auth
```

```typescript
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = localStorage.getItem('token') ? true : false;

    if (!isAuthenticated) {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
    return true;
  }
}
```

---

# @ViewChild in Angular

`@ViewChild` is a decorator in Angular that allows you to get a reference to a child component, directive, or DOM element within a parent component. It is commonly used when you need direct access to child elements for manipulation, such as calling methods, changing properties, or modifying styles dynamically.

```typescript
@ViewChild(selector) childProperty: ChildComponent;
```

- `selector`: The component, directive, or template reference variable you want to access.
- `childProperty`: A variable where the reference to the child component or element will be stored.

---

# ng-template and ng-container

- `<ng-template>` is an Angular element that is not rendered in the DOM unless explicitly instructed. It is used with structural directives (`*ngIf`, `*ngFor`, etc.) or injected dynamically.
- `<ng-container>` is an invisible wrapper that groups elements without adding an extra HTML element to the DOM.
- Best used to prevent unnecessary `<div>` wrappers in the DOM.

---

# Services

- Services are used for code reusability and dependency injection.
- Created using `ng generate service service-name`.
- Injected into components via the constructor.
- Commonly used for API calls and shared data.

---

# Interceptors

- Interceptors are used to modify HTTP requests and responses globally.
- Created using `ng generate interceptor interceptor-name`.
- Implement the `HttpInterceptor` interface.
- Used for authentication, logging, and error handling.

---

# Key Differences Between Promises & Observables

| Feature          | Promise                | Observable                  |
|------------------|------------------------|-----------------------------|
| Emits Values     | Only once              | Multiple times              |
| Cancellable      | No                     | Yes (unsubscribe)           |
| Execution        | Runs immediately       | Runs only when subscribed   |
| Operators        | No extra features      | Supports powerful RxJS operators |
| Handling Errors  | `.catch()`             | `.subscribe({ error })`     |

## When to Use What?

- Use **Promises** when:
  - You only need one result (e.g., API call, fetching user data once).
  - You want a simpler solution with `.then()` / `.catch()`.
- Use **Observables** when:
  - You need multiple values over time (e.g., live updates, WebSocket, user input events).
  - You need to unsubscribe to stop listening.
  - You want to use RxJS operators for transformation, filtering, etc.

| Use Case                          | Best Choice                        |
|-----------------------------------|------------------------------------|
| API Calls (GET, POST, etc.)       | HttpClient (Observable-based) ✅   |
| Real-time data (WebSockets)       | Observable ✅                      |
| User events (clicks, keystrokes)  | Observable ✅                      |
| One-time async task               | Promise ✅                         |
| State management inside components| Signals (Angular 16+) ✅           |
| Timers (setTimeout, setInterval)  | Observable ✅                      |

---

# QueryParams in Routing

`queryParams` in Angular allow you to pass optional parameters through the URL without affecting the route structure. They are useful when you need to send extra data without defining them in the route path.

- Unlike component variables, query parameters persist even if the page is reloaded.

---

# View Encapsulation

View Encapsulation in Angular is a mechanism to control the visibility and scope of styles applied to a component's template. It defines how the component's styles should interact with its parent and child components in the component tree. By default, Angular uses encapsulation to isolate styles between components to prevent them from affecting other parts of the application.

### 1. Emulated (default)
This is the default encapsulation strategy. It emulates native shadow DOM behavior by adding a unique attribute to the component's HTML and styles, ensuring that styles are scoped only to that component.

- **How it works**:
  - Angular adds an additional attribute to the component's HTML elements (e.g., `class="my-component-xyz"`).
  - Angular uses scoped styles by appending the component class to each CSS selector.
  - Styles are isolated to the component but not completely hidden from others.

### 2. None
With the None view encapsulation, Angular doesn't encapsulate styles at all. This means that the styles you define in the component will leak out and affect other components. This behavior is similar to traditional global CSS.

- **How it works**:
  - No special attribute is added to the component's HTML.
  - The styles are applied globally across the entire application.
  - Useful when you want to apply global styles or override default encapsulation behavior.

### 3. Shadow DOM
This is the most isolated form of encapsulation and uses the native Shadow DOM to encapsulate styles and HTML content in the browser. With this strategy, styles and HTML are completely encapsulated within the component, and external styles won't affect the component, nor will the component's styles leak out.

- **How it works**:
  - Angular uses the native browser Shadow DOM to encapsulate styles and HTML.
  - Styles are completely isolated from the rest of the page.
  - The styles only apply to the component inside the shadow tree.
