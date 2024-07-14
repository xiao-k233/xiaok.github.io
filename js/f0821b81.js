(()=>{let n=t=>fetch(t).then(t=>{if(t.ok)return t.json();throw new Error(`Network response was not ok (Status: ${t.status})`)}).catch(t=>{throw t});class h{constructor(t){this.root=this.getElement(t),this.initializeDOMStructure(),this.setStyles()}getElement(t){var e=document.querySelector(t);if(e)return e;throw new Error(`Element with selector ${t} not found.`)}initializeDOMStructure(){this.now=document.createElement("div"),this.now.className="now";var t=document.createElement("div"),e=(this.obsTime=document.createElement("div"),this.obsTime.id="obs-time",this.nowTemp=document.createElement("span"),this.nowTemp.id="now-temp",t.appendChild(this.obsTime),t.appendChild(this.nowTemp),document.createElement("div"));this.nowIcon=document.createElement("div"),this.nowIcon.id="now-icon",this.nowWeather=document.createElement("span"),this.nowWeather.id="now-weather",e.appendChild(this.nowIcon),e.appendChild(this.nowWeather),this.now.appendChild(t),this.now.appendChild(e),this.ul=document.createElement("ul"),this.ul.id="weather-7d",this.root.appendChild(this.now),this.root.appendChild(this.ul)}setStyles(){this.root.style.opacity="0",this.root.style.position="absolute",this.root.style.top="10%",this.root.style.left="10%",this.root.style.width="30%",this.root.style.display="flex",this.root.style.flexDirection="column",this.root.style.padding="20px",this.root.style.borderRadius="20px",this.root.style.zIndex="10",this.root.style.minWidth="420px",this.root.style.backdropFilter="blur(30px)",this.root.style.background="linear-gradient(180deg,hsla(0,0%,100%,.28),hsla(0,0%,100%,0))",this.root.style.boxShadow="inset 0 0.5px 0 1px hsla(0,0%,100%,.23), inset 0 1px 0 0 hsla(0,0%,100%,.66), 0 4px 16px rgba(0,0,0,.12)",this.now.style.flex="1",this.now.style.display="flex",this.now.style.justifyContent="space-between",this.now.style.alignItems="center",this.obsTime.style.fontSize="13px",this.nowWeather.style.fontSize="13px",this.nowIcon.style.textAlign="right",this.nowTemp.style.fontSize="42px",this.nowTemp.style.color="var(--color-font)",this.ul.style.display="flex",this.ul.style.margin="0",this.ul.style.padding="20px 0 0 0",this.ul.style.justifyContent="space-between"}updateNowWeather(t){var{icon:t,text:e,temp:i,obsTime:o,windDir:n,humidity:s,pressure:l}=t,o=(this.obsTime.innerHTML=`
      <cosy-tooltip placement="right">
        <span slot="content">观测时间</span>
        ${new Date(o).toLocaleTimeString()}
      </cosy-tooltip>
    `,e+" "+n);this.nowIcon.innerHTML=`
      <cosy-tooltip placement="left">
        <span slot="content">${o}</span>
        <img style="width:48px;height:48px" src="/img/qweather-color-icon/${t}.png" alt=${e} />
      </cosy-tooltip>
    `,this.nowWeather.innerHTML=`P:${l} H:`+s,this.nowTemp.innerHTML=i+"°"}update7DayForecast(t){t=t.daily;t.forEach(t=>{var{tempMin:t,tempMax:e,iconDay:i,fxDate:o,textDay:n,textNight:s}=t,n=`
          <cosy-tooltip>
            <span slot="content">${n+" -> "+s}</span>
            <li style="display: flex; flex-direction: column; align-items: center;">
              <span style="color: var(--color-font); font-size: 12px; line-height: 1.5;">${new Date(o).getDate()}</span>
              <img src="/img/qweather-color-icon/${i}.png" style="width: 22px; height: 22px;">
              <span style="color: var(--color-font); font-size: 12px; line-height: 1.5;">${t}-${e}°</span>
            </li>
          </cosy-tooltip>
        </li>
      `;this.ul.insertAdjacentHTML("beforeend",n)})}}{var e=window.weather;let{enable:t,cityCode:i,appKey:o}=e;if("true"===t){let t=`https://devapi.qweather.com/v7/weather/7d?location=${i}&key=`+o,e=`https://devapi.qweather.com/v7/weather/now?location=${i}&key=`+o;Promise.all([n(e),n(t)]).then(([t,e])=>{var i,o,n,s,l,a,r;"200"===(null==t?void 0:t.code)&&"200"===(null==e?void 0:e.code)&&(i=new h(".weather"),{icon:t,text:o,temp:n,obsTime:s,windDir:l,humidity:a,pressure:r}=t.now,i.updateNowWeather({icon:t,text:o,temp:n,obsTime:s,windDir:l,humidity:a,pressure:r}),t=e.daily.map(t=>({tempMin:t.tempMin,tempMax:t.tempMax,iconDay:t.iconDay,fxDate:t.fxDate,textDay:t.textDay,textNight:t.textNight})),i.update7DayForecast({daily:t}))})}}})();