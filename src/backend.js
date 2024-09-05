// src/backend.js
export class Backend {
  async getToken(username, password) {
    try {
      const response = await fetch(
        "http://localhost:4000/api/xassist/getToken",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({ username, password }),
        }
      );

      console.log(response)

      if (response.ok) {
        const result = await response.json();
        console.log("currently fetiching token")
        console.log(result.response)
        return result.response;
      } else {
        console.error("Failed to fetch Token");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async getMarks(token) {
    try {
      const response = await fetch("http://localhost:4000/api/xassist/getMarks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        const result = await response.json();
        return result.response;
      } else {
        console.error("Failed to fetch marks");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
}
