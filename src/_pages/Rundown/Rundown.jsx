import React from 'react';
import './Rundown.css';

class Rundown extends React.Component {

  render() {
    return (
      <div id="rundown">
        <div className="title">流程及簡介</div>
        <ul>
          {
            this.props.theme === 'xmas' ?
            <li>
              <p className="xmas-fact">XMAS Facts</p>
              <p>10 個關於聖誕節的冷知識</p>
              <p className="text-red">61 聖誕老公公會送答對的小伙伴願望禮物哦~</p>
            </li> :
            <li>
              <p>个人及团体分数累计:</p>
              <p>获胜: 个人战获胜一次加 1 分</p>
              <p>团队获胜组员每人加 1 分</p>
              <p>最终得分最高的第 1、2、3名 分别获得:</p>
              <p>1. 61 澳元奖金 + 1 天假期</p>
              <p>2. 61 澳元奖金 + 1 盒月餅</p>
              <p>3. 61 澳元奖金</p>
              <p>最终得分最低的 3 人惩罚俯卧撑分别: 20个、15个、12个。</p>
              <p>单个游戏获胜者可获得一個月饼，该游戏结束时送出月饼</p>
            </li>
          }
          <li>
            <p>你畫(說)我猜</p>
          </li>
          <li>
            <p>看圖猜成語</p>
          </li>
          <li>
            <p>不計分同樂遊戲：狼人殺、誰是臥底</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Rundown;
