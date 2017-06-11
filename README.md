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

```javascript

To access Coursera Api(Using the link from Our API)
$ajax({
  type: "POST",
  url: "COURSERA_API_URL",
  data: YOUR_DATA,
  success: (res) => {
    const link = 
      `https://www.coursera.org/learn/{res.data.elements[0].slug}`

       //Do something with link
       ...
  }
});

```

