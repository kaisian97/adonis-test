import Factory from "@ioc:Adonis/Lucid/Factory";
import Role from "App/Models/Role";
import User from "App/Models/User";

export const RoleFactory = Factory.define(Role, ({ faker }) => {
  return {
    code: faker.lorem.text(5).toUpperCase(),
    displayName: faker.lorem.text(10),
    description: faker.lorem.paragraph(2),
  };
})
  .relation("users", () => UserFactory)
  .build();

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
    phone: faker.phone.phoneFormats(),
    address: faker.address.streetAddress(),
  };
}).build();
