import san,{DataTypes} from 'san'
require('./index.css')
var MyApp = san.defineComponent({
    template: '\
        <div>\
            <ul>\
                <li><input type="text" placeholder="姓名(string)" value="{= name =}" on-input="setName"/></li>\
                <li><input type="text" placeholder="年龄(number)" value="{= age =}" on-input="setAge"/></li>\
                <li><input type="text" placeholder="简介(string)" value="{= des =}" on-input="setDes"/></li>\
            </ul>\
            <div>信息:<button type="button" on-click="remove">移除信息</button></div>\
            <ul>\
                <li>姓名:<span>{{name}}</span></li>\
                <li>年龄:<span>{{age}}</span></li>\
                <li>简介:<span>{{des}}</span></li>\
            </ul>\
        </div>\
        ',
        remove:function(){
            this.data.set("person", {
                name: undefined,
                age: undefined,
                des: undefined
              });
            this.data.set('name','')
            this.data.set('age','')
            this.data.set('des','')
        },
            
        setName:function() {
            this.data.set("person.name", this.data.get("name"));
            },
            setAge() {
            this.data.set("person.age", isNaN(parseInt(this.data.get("age"))) ? undefined : parseInt(this.data.get("age")));
            },
            setDes() {
            this.data.set("person.des", this.data.get("des"));
            },
    initData: function () {
        return {
            person: {
                name: undefined,
                age: undefined,
                des: undefined
            }
        };
    },
    dataTypes: {
        person: DataTypes.shape({
          name: DataTypes.string,
          age: DataTypes.number,
          des: DataTypes.string
        })
    },
});

var myApp = new MyApp();
myApp.attach(document.body);