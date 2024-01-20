import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '이름' })
  name: string;

  @Column({ default: true, comment: '공개 여부'})
  public: boolean

  constructor(item: Partial<Item>){
    Object.assign(this, item);
    // Read: 새 항목을 만들기 쉽다.
    // name, public 속성중 일부가 있는 객체를 전달하면 생상자가 자동으로 할당 하기 때문에 추 후 업데이트할때 속성을 계속 업데이트할 필요가 없어진다.
  }
}
