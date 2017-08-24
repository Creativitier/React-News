import React from 'react'
import './style.less'
export default class HotWord extends React.Component {
      constructor() {
          super()
          this.state = {
              hotWord: ['焦恩俊女儿遭骚扰','共享遛娃小车被清','台风天鸽逼近','主动单身者增多','王思聪前女友怀孕','最严禁酒令出台','郭敬明骚扰男作家','西藏波密3.1地震','哺乳时被男孩拍照','美海军暂停行动']
          }
      }
    render() {

         const HotList = this.state.hotWord.map((hot, index) => (
                 <li class="hot" key={index}>{hot}</li>
         ))

        return (
           <div>
               <ul class="hot-word">
                   {HotList}
               </ul>
           </div>
        )
    }
}
