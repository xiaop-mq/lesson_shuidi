import { Controller } from 'egg';

export default class UserController extends Controller {
  public async githubLogin() {
    console.log(this.ctx.query.code);
    
  }
}
