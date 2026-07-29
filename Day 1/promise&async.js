// Menggunakan Promise 
const getData = () => {
    return new Promise((resolve, reject) => {})
        setTimeout(() => {
            resolve({ message: "Data Berhasil diambil" });
        }, 1000);
    };

getData()
    .then((response) => {
        console.log(response.message);
    }); // Output: Data Berhasil diambil

// Menggunakan Async Await
const fetchData = async () => {
    try {
        const response = await getData();
        console.log(response.message);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

fetchData(); // Output: Data Berhasil diambil
