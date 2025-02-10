// Create a blog list page that fetches a list of users from a mock API and adds them to a
// table on the page after loading. Add a button to sort the users by name. Add an input to
// filter the table by search. (Optional: Show “Loading...” or a loading spinner on the scre
// till the data loads)

async function fetchUsersconsole() {
    try {
        const response = await fetch('http://127.0.0.1:3000/admins');
        const data = await response.json();
        users = data.data;
        // console.log(users)
        console.log(data)
       
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        
    }
}
fetchUsersconsole()

//Output:-- Simple fetch a data form my rails User API and display on console
// [
//     {
//       id: 1,
//       first_name: 'John',
//       last_name: 'Doe',
//       email: 'john.doe1@example.com'
//     },
//     {
//       id: 2,
//       first_name: 'Jane',
//       last_name: 'Smith',
//       email: 'jane.smith1@example.com'
//     },
//     {
//       id: 3,
//       first_name: 'John',
//       last_name: 'Doe',
//       email: 'john.doe2@example.com'
//     },
//     {
//       id: 4,
//       first_name: 'John',
//       last_name: 'Doe',
//       email: 'john.d2oe2@example.com'
//     }
//   ]




