const ServiceDescription = ({ service }) => {
  return (
    <article className="w-3/5 bg-[#ecf0f1] ml-8 p-4 text-center flex flex-col items-center">
      <header>
        <h2 className="text-xl font-bold">{service.service}</h2>
        <p className="font-bold">Estimated cost: {service.cost}</p>
        <em>Estimated time: {service.timeEst}</em>
      </header>
      <p>{service.description}</p>
      <img src={`/${service.imgUrl}`} alt={service.description} />
    </article>
  );
};

export default ServiceDescription;
