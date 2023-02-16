export class clients{

    cid: number;
    name: string;
    project: string;
    status: string;
    phone: string;
    state: string;


    constructor (cid: number, name: string, project: string, status: string, phone: string, state: string){
        this.cid = cid;
        this.name = name;
        this.project = project;
        this.status = status;
        this.phone = phone;
        this.state = state;
    }

    showClient(){
        console.log(this.cid + " " + this.name);
    }
}