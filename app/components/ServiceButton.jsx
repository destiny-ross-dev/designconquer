const ServiceButton = ({ service, handleServiceButtonClick }) => {
  console.log(service);
  return (
    <button
      onClick={(e) => handleServiceButtonClick(service)}
      className="bg-[#2c3e50] p-4 mb-4 text-white rounded"
    >
      {service.service}
    </button>
  );
};

export default ServiceButton;
