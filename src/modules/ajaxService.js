async function ajaxService() {
  try {
    const response = await fetch(
      "http://www.omdbapi.com/?i=tt3896198&apikey=d4181cea"
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
}

export default ajaxService;
