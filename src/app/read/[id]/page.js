export default async function Read(props) {
  const response = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const result = await response.json();
  return (
    <>
    <h2>{result.title}</h2>
    {result.body}
    </>
  )
}