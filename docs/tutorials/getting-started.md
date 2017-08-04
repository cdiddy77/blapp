# Getting started

### Step 1

Welcome, let's start by adding a button. Drag a ``||BUTTON||`` block into the ``||UI theme||`` block.

```blocks
UI.userInterface(UITheme.Calm, () => {
    UI.textElement(
        false,
        UITextClass.Label,
        "Press Me",
        []
        )
})
```

### Step 2

Drag a ``||TEXT||`` block into the ``||BUTTON||`` block's "children" section and set the text to `Press Me`.

```blocks
UI.userInterface(UITheme.Calm, function() {
    UI.buttonElement("", false, UIButtonClass.Small, null, function() {

    }, () => {
    })
})
```

### Step 3

Create a variable named "visible" and set it to `true` in the ``||BUTTON||`` block's "when pressed" section.

```blocks
let visible = false
UI.userInterface(UITheme.Calm, () => {
    UI.buttonElement("", false, UIButtonClass.Small, [], () => {
        UI.textElement(
        false,
        UITextClass.Label,
        "Press Me",
        []
        )
    }, () => {
        visible = true
    })
})
```

### Step 4

Below your ``||BUTTON||`` block, add an ``||if||`` block and place the variable you created as the condition.

```blocks
let visible = false
UI.userInterface(UITheme.Calm, () => {
    UI.buttonElement("", false, UIButtonClass.Small, [], () => {
        UI.textElement(
        false,
        UITextClass.Label,
        "Press Me",
        []
        )
    }, () => {
        visible = true
    })
    if (visible) {

    }
})
```

### Step 5

Inside the ``||if||`` block, add a ``||TEXT||`` block with the value `Hello World!`

```blocks
let visible = false
UI.userInterface(UITheme.Calm, () => {
    UI.buttonElement("", false, UIButtonClass.Small, [], () => {
        UI.textElement(
        false,
        UITextClass.Label,
        "Press Me",
        []
        )
    }, () => {
        visible = true
    })
    if (visible) {
        UI.textElement(
        false,
        UITextClass.Label,
        "Hello World",
        []
        )
    }
})
```

### Step 6

When you click the button, you should see the text `Hello World!` appear. Congratulations, you've written your first app!