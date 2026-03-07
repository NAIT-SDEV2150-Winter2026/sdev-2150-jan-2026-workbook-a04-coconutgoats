export default function ResultsItem({ title, category, summary, location, children })
{
  return (
    <div
      style={{
        border: '1px solid black'
      }}
    >
      <h2>Results Item</h2>
      <div>{title}</div>
      {children}
      <div>{category}</div>
      <div>{summary}</div>
      <div>{location}</div>
    </div>
  );
}