// Create a form to submit a blog to a mock API (reqres.in)
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const blogData = {
        title: title,
        content: content
    };
    fetch('https://reqres.in/api/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Blog submitted:', data);
        alert('Blog submitted successfully!');
    })
    .catch(error => {
        console.error('Error submitting blog:', error);
        alert('There was an error submitting your blog.');
    });
    document.getElementById('blogForm').reset();
});

//Output:--
//   Image :--blog1.png
//   Image :--blog2.png