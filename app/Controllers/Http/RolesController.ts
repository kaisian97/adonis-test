import Role from "App/Models/Role";
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { RoleFactory } from "Database/factories";

export default class RolesController {
  public async index() {
    const roles = await Role.all();
    return roles;
  }

  public async store() {
    const roles = await RoleFactory.with("users", 3).create();
    return roles
  }
}
