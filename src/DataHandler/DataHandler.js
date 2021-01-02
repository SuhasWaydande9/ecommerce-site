export async function dataLoader(url){
	const data = await fetch(url).then(res=>res.json()).catch(err=> [])
	return data;
};
