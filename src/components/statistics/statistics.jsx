export const Statistics = p => {
  const { title = '', stats } = p;
  console.log(title, stats);
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(elem => (
          <li className="item" key={elem.id}>
            <span className="label">{elem.label}</span>
            <span className="percentage">{elem.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
