export default function useJsonFetch(){

    const BASE_API_URL = "http://localhost:8000/api";
    
    const jsonGet = async (url: string) => {
        const req = await fetch(BASE_API_URL + url);
        return await req.json();
    }

    const jsonPost = async (url: string, body: any, method: "POST" | "PUT" = "POST") => {

        var formData = new FormData();

        formData.append("_method", method);

        for ( var key in body ) {
            formData.append(key, body[key]);
        }

        const req = await fetch(BASE_API_URL + url, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        return await req.json();
    }

    const jsonDelete = async(url: string) => {
        const req = await fetch(BASE_API_URL + url, { method: "DELETE" });
        return await req.json();
    }

    return { jsonGet, jsonPost, jsonDelete }

}