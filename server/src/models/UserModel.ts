import { Field, ID, ObjectType } from "type-graphql"

@ObjectType()
export class User {
  @Field(_type => ID)
  id: string

  @Field(() => String)
  name: string
}
