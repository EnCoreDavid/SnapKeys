# SnapKeys

A web app that helps students to find homeworks solutions by taking a picture of the question.

## Get Started

Here is how you can connect to our api:
```javascript

// To Upload An Image

const YOUR_DATA = { file: IMAGE }

$ajax({
  type: "POST",
  url: "https://snapkeys.herokuapp.com/upload",
  data: YOUR_DATA,
  success: YOUR_FUNCTION
});

```

