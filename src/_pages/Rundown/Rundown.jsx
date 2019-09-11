import React from 'react';
import './Rundown.css';

class Rundown extends React.Component {

  render() {
    return (
      <div id="rundown">
        <h3>流程</h3>
        <ul>
          <li>
            <p>个人及团体分数累计:</p>
            <p>获胜: 个人战获胜一次加 1 分</p>
            <p>团队获胜组员每人加 1 分</p>
            <p>失败: 个人战失败不扣分 团队站失败组员每人扣 1 分</p>
            <p>最终得分最高的第 1、2、3名 分别获得:</p>
            <p>1. 100 澳元奖金 + 1 天假期</p>
            <p>2. 100 澳元奖金</p>
            <p>3. 61 澳元奖金</p>
            <p>最终得分最低的 3 人惩罚俯卧撑分别: 20个、15个、12个。</p>
            <p>单个游戏获胜者根据排名可获得对应数量月饼，该游戏</p>
            <p>结束时送出月饼</p>
          </li>
          <li>
            <p>看圖猜成語</p>
          </li>
          <li>
            <p>你說我猜</p>
          </li>
          <li>
            <p>誰是臥底</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Rundown;
