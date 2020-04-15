// type 关键字`
type IUserInfoFunc = (user: IUser) => string;

interface  IUser {
  name: string,
  age: number
}

// 常量 js 类型由值来决定， 提前决定
const getUserInfos:IUserInfoFunc = (user) => {
  return `name: ${user.name}, age: ${user.age}`;
}

console.log(getUserInfos({name: "xiaop", age: 12}))