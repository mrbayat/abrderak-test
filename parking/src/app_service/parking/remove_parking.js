module.exports = async (data, { parkingRepository }) => {
  const { parkingId } = data;

  const result = await parkingRepository.remove({ parkingId });

  return { parkingId: result };
};
