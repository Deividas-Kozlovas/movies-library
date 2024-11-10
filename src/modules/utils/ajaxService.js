require("dotenv").config();

const ajaxService = async (movie) => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error(
        "API key is missing. Please check your environment variables."
      );
    }

    const response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error.message);
    return [];
  }
};

export default ajaxService;
