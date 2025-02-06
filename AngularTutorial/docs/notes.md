1. Components:
2. Templates
3. Services

Components: 

- **A component is a merging of two pieces, the display and the logic to go with it**
- Metadata is inside the decorator

Templates:

- **Templates are the display of a component.** 
**Each component has a template.**

### Interpolation and Property Binding in Angular: (One-Way)

1. **Interpolation (`{{ }}`)**
- Interpolation allows you to bind and display **string values or the result of expressions** in the template.
    
    ```html
    <p>{{ expression }}</p>
    ```
    
    - Only supports **one-way data binding (component → template)**.
    - Can evaluate **expressions** like method calls or property accesses.

**2. Property Binding (`[property]`)**
- Property binding allows you to bind data from the component to a **DOM property** in the template.

```html
<tag [property]="expression"></tag>
```

- Directly binds a component's property to a **DOM property**.
- Supports various types of properties such as `src`, `disabled`, `hidden`, etc.
- Provides better **performance and flexibility** compared to interpolation.
1. **Event Binding in Angular**

**-Event Binding** allows you to handle user interactions such as clicks, key presses, or mouse events by binding DOM events to component methods.

```html
<tag (event)="expression"></tag>
```

### Two-Way Binding:

Two-way data binding allows you to **bind a component property to a form element** and automatically update both when either one changes.

- Two-way binding uses the directive **`ngModel`**, which is part of the **FormsModule**.

```html
<input [(ngModel)]="property" />
```
