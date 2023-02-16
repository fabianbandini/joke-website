export default async function handler(req, res) {
    const response = await fetch('https://api.chucknorris.io/jokes/random').then(res => res.json());
    res.status(200).json(response.value)
}