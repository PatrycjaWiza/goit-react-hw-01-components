export const Stats = ({ data, title }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {data.map(({ id, label, percentage }) => (
          <li key={id} class="item">
            <span class="label">{label}</span>
            <span class="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
