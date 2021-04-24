export default function useJsonFetch(){
    
    const jsonFetch = async (url: string) => {
        const req = await fetch("http://localhost:8000/api" + url);
        return await req.json();
    }

    return { jsonFetch }

}