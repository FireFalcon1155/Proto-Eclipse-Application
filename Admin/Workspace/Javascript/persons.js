function Employee(name, sector, rank, mf, ID){
	this.name=name;
	this.sector=sector;
	this.rank=rank;
	this.mf=mf;
	employees[ID]={rank:this.rank,name:this.name,mf:this.mf,sector:this.sector};
}
var employees={

}