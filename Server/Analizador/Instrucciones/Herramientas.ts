export default class Herramientas{

    static pythonTabs(ntabs:number):string{
        let tabs = "";
        for(let i = 0; i < ntabs; i++){
            tabs+="\t";
        }
        return tabs;
    }
}