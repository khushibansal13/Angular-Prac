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
## Signals and Change Detection in Angular:

- Signals Trigger Change Detection: Updating a signal (signal.set()) automatically triggers Angular's change detection, even with ChangeDetectionStrategy.OnPush.
- Template Re-Evaluation: Once a signal updates, Angular re-renders the template, including changes to normal variables.
- Efficient State Management: Signals act as reactive primitives tightly integrated with Angular's rendering pipeline, ensuring efficient and automatic updates.

- **Linked signals** allow one signal's value to depend on other signals. Angular automatically re-evaluates the dependent signal whenever any source signals change.

```typescript
  fullName = linkedSignal({
    source: this.firstName,
    computation: (newVal, PrevVal) => {
      debugger;
      const fullName = newVal + " " + this.lastName();
      return fullName;
    }
  })
  ```
  ---
  ## Template Forms:

- Template-driven forms rely on HTML templates to define form structure and logic.
- Ideal for simple forms and small-scale applications.
```html
<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <label>Name:</label>
  <input type="text" name="name" [(ngModel)]="user.name" required>

  <label>Email:</label>
  <input type="email" name="email" [(ngModel)]="user.email" required>

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>
```
  - Built-in form state tracking (touched, dirty, valid).
  - #userForm="ngForm" references the form in the template for validation.
  - [disabled]="userForm.invalid" disables the submit button if the form is invalid.



