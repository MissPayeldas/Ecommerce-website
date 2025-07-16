
    document.addEventListener("DOMContentLoaded", function(){
      // Retrieve logged-in user details from localStorage (assume it's stored as a JSON string)
      const userInfo = JSON.parse(localStorage.getItem("loggedInUser"));
      if (userInfo && userInfo.name) {
        document.getElementById("user-name").innerText = `Hello, ${userInfo.name}`;
      } else {
        document.getElementById("user-name").innerText = "Hello, User";
      }
      
      // Handle logout: remove user data and redirect to login page
      document.getElementById("logout-btn").addEventListener("click", function(){
        localStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
      });
    });
    

    
    // Sample data to search through
    const items = [
        { name: "New Phone 1", link: "new-phone1.html" },
        { name: "Old Phone 1", link: "old-phone1.html" },
        { name: "TV 1", link: "tv1.html" },
        { name: "AirPods", link: "airpods.html" },
        // Add more items as needed
    ];

    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const query = document.getElementById('searchInput').value.toLowerCase();
        const results = items.filter(item => item.name.toLowerCase().includes(query));

        // Display results (you can customize this part)
        if (results.length > 0) {
            let resultHtml = '<h3>Search Results:</h3><ul>';
            results.forEach(item => {
                resultHtml += `<li><a href="${item.link}">${item.name}</a></li>`;
            });
            resultHtml += '</ul>';
            document.getElementById('searchResults').innerHTML = resultHtml;
        } else {
            document.getElementById('searchResults').innerHTML = '<p>No results found.</p>';
        }
    });

    document.getElementById('searchForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const query = document.getElementById('searchInput').value;
  
      fetch(`http://localhost:5502/search?query=${encodeURIComponent(query)}`)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              // Process and display the results
              let resultHtml = '<h3>Search Results:</h3><ul>';
              if (data.length > 0) {
                  data.forEach(item => {
                      resultHtml += `<li><a href="${item.link}">${item.name}</a></li>`;
                  });
              } else {
                  resultHtml += '<li>No results found.</li>';
              }
              resultHtml += '</ul>';
              document.getElementById('searchResults').innerHTML = resultHtml;
          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
              document.getElementById('searchResults').innerHTML = '<p>Error fetching results.</p>';
          });
  });


