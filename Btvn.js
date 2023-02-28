import React from "react";
import style from './btvn.module.css'
class Btvn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Anh: [  
                {name: 'Anh' , status: false}              
            ],
            item:'',
            check:-1

            
        }
    } 

    getValue(e){
        this.setState({ item: e.target.value})
       
    }   
    Em(e){
        let list = this.state.Anh;
        list.push({name:this.state.item , status: Boolean(Math.round(Math.random())) })
        this.setState({
            Son: list
        }) 
        
    } 
    upDate(e,key){
        this.setState({
            check:key,
            item: e.target.value
        })

    } 
    updateName(e){
        let list = this.state.Anh
        list.find((item, index) => {
            return index === this.state.check
        }).name = this.state.item;
        this.setState({
            Anh: list,
            check:-1
        })
    } 
    delete(e,index){
        let list = this.state.Anh;
        list.splice(index,1)
        this.setState({
            Anh: list
        })
    }
    render() { 
        return ( 
            <>
            <input onChange={(e) => this.getValue(e)} type="text"/>
            <button onClick={(e) => this.Em(e)}>+</button>
            <table border={1} >
                     <thead>
                    <tr>
                        <td></td>
                        <td>STT</td>
                        <td>Tên</td>
                        <td>Trạng Thái</td>
                        <td>Hoạt Động</td>
                        <td></td>
                    </tr>
                    
                </thead>
                {
                    this.state.Anh.map((item,index)=> {
                        
                        return(
                            <tbody key={index}>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>{index +1}</td>
                                    {(this.state.check === index) ?
                                        <td><input defaultValue={item.name} onChange={(e) => this.getValue(e)} onBlur={(e) => this.updateName(e)} type="text"/></td>
                                        :
                                        <td className="red">{item.name}</td>
                                    }
                                    
                                    <td><button onClick={(e) => this.upDate(e,index)}    className="c">Chỉnh Sửa Trạng Thái</button></td>
                                    <td className={(item.status) ? style.green : style.red}>*</td>   
                                    <td><button onClick={(e) => this.delete(e,index)} className="c">Xóa</button></td>
                                </tr>
                                
                                               
                            
                            </tbody>
                           
                        )
                        
                        
                    })
                }
            </table>
            </>
         );
    }
}
 
export default Btvn;
