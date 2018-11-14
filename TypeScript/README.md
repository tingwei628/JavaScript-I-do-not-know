## Quick Note
```ts
var isBool: boolean = false;

let num: number = 1;

num = 2;

const str: string = "i am string";

var arr: string[] = ["abc", "cbd"];

var arr_num: number[] = [1, 2, 3]; 
var arr_num2: Array<number> = [1, 2, 3, 4];

enum T
{ 
  A,B,C
}

function v(): void { // return void
    return;
}
function v_optional(a:string, ...b:string[]): string {
    if (b) {
        return b[0];
    }
    return a;
}
class C { 
    t: string;
    private age: number;
    static no_object_propery: string = "bdfd";
    constructor() { 
        this.t = "b";
    }
    say(): string {
        return this.t; 
    }
    say_age(): number { 
        return this.age;
    }
}
interface IC { 
    say_nothing(a:string) :number;
    setTime: (a: number) => void;
    setTime2(a: number): void;
}

// abstract class AC implements IC{ 
//     abstract say_nothing: () => void
// }


new C().say_age();
new C().t;
C.no_object_propery;

interface Shape {
	color:string;
}

interface Square extends Shape {
	sideLength:number;
}


let square = <Square>{};
square.color = "red";
console.log(v_optional("abc"));


class G<T> {
    title: string;
    private p_title: string;
    constructor(public name: string, _title :string = "default_title") {
        this.title = _title;
    }
    
}
interface IG<T> { 
    createIG(account: T): T;
    createIG2: (account: T) => T;
}

class GA<T extends G<C>> { // equivalent to  class GA<T> where T : G<C> in C#

}

let g: G<number> = new G<number>("book_name");
let ig: IG<string>;

console.log(g.name);
console.log(g.title);



namespace FF {
    export class FF1 {

    }
    class FF2 {

    }

    export namespace DD {
      export class DD2 {}
    }
}

//FF.FF1
//FF.DD.DD2

```
