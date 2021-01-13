module.exports = (mongoose, mongoosePaginate) => {
  const schema = mongoose.Schema(
      {
        name: String,
        phone: {
          work: String,
          home: String,
          mobile: String,
          other: String
        },
        email: String,
        address: String
      },
      { timestamps: true }
  );
  schema.plugin(mongoosePaginate);

  const Person = mongoose.model(
      "person",
      schema
  );

  return Person;
};
