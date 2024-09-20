export async function getData() {
  const data = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => response.json()
  );

  return data;
}

export default async function SSG() {
  const data = await getData();
  return (
    <>
      <div>{data.title}</div>
    </>
  );
}
