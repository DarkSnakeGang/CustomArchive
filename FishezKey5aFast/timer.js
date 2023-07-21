
// const arrayIndices = n => Array(n).fill().map((q, i) => i)

// const [classic, wall, portal, cheese, infinity, twin, winged, yinyang, key, sokoban, poison, dimension, minesweeper, statue, light, peaceful] = arrayIndices(16)
// const [one, three, five, dice] = arrayIndices(4)
// const [normal, fast, slow] = arrayIndices(3)
// const [standard, small, large] = arrayIndices(3)


window.getSelected = function(selector, selectedClass = 'DqMRee tuJOWd') {
  return (
    [...document.querySelector(selector).children].map(
      (q, i) => [q, i]
    ).filter(
      ([q,]) => q.className === selectedClass
    )[0] || [0, 0]
  )[1]
}

String.prototype.color = function(c) { return `<span style="color:${c}">${this.toString()}</span>` }

Number.prototype.timeFormat = function() {
  const time = +this

  const hours   = Math.floor(time / 3600)
  const minutes = Math.floor((time / 60) % 60)
  const seconds = Math.floor(time % 60)
  const millis  = Math.floor((time % 1).toFixed(4) * 1000)

  let out = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}.${millis.toString().padStart(3, '0')}`
  out = out.slice(out.search(/[^0:]/))

  return (out[0] === '.' ? '0' : '') + out
}
String.prototype.timeFormat = function() {
  return (+this).timeFormat()
}


window.timer = {}

timer.runCodeBefore = function() {
  window._splits = []

  window._pb = JSON.parse(localStorage._snake_pb || '{}')

  const deltaDiv = document.createElement('div')
  deltaDiv.id = 'timerDelta'
  deltaDiv.innerHTML = '-'.color('white')
  
  const timerDiv = document.getElementsByClassName('Jc72He rc48Qb')[0]
  timerDiv.appendChild(deltaDiv)
  timerDiv.style.cursor = 'pointer'

  timerDiv.addEventListener('click', function() {
    let editBox = document.getElementById('edit-box')
    if(editBox) {
      editBox.remove()
    } else { 
      editBox = document.createElement('div')
      editBox.id = 'edit-box'
      editBox.style = `
        background-color: #aaaaff;
        border-radius: 1.5vh;
        position: absolute;
        height: unset;
        z-index: 10000000000;
        top: 30px;
        left: 50%;
        backdrop-filter: blur(5px);
        text-align: center;
        padding: 40px;
        transform: translate(-50%, 0);
        box-shadow: 0px 0px 8px rgba(0,0,0,0.4);
        border: 1px solid #4444dd;
        font-size: 2.4vh;
        color: black;
        font-family: Consolas;
      `
      editBox.innerHTML = `
        <span id="close-box" style="
          position: absolute;
          top: 10px;
          right: 15px;
          cursor: pointer;
          color: black;
          font-size: 0.9em;
        ">&#x2715</span>

        <h1 style="font-size: 3.4vh">
          Edit PB/Comparison
        </h1>

        <div id="edit-mode">
          <img class="sel" style="cursor: pointer; border: 4px ridge #af4490ff; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_00.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_01.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_02.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_03.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_04.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_05.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_06.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_07.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_08.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_09.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_10.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_11.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_12.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_13.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_14.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v16/trophy_15.png" width="32px" height="32px"/>
        </div>
        <br/>
        <div id="edit-count">
          <img class="sel" style="cursor: pointer; border: 4px ridge #af4490ff; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_00.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_01.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_02.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v17/count_03.png" width="32px" height="32px"/>
        </div>
        <br/>
        <div id="edit-speed">
          <img class="sel" style="cursor: pointer; border: 4px ridge #af4490ff; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_00.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_01.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v3/speed_02.png" width="32px" height="32px"/>
        </div>
        <br/>
        <div id="edit-size">
          <img class="sel" style="cursor: pointer; border: 4px ridge #af4490ff; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v4/size_00.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v4/size_01.png" width="32px" height="32px"/>
          <img class="uns" style="cursor: pointer; border: 4px ridge #00000000; border-radius: 8px;" src="https://www.google.com/logos/fnbx/snake_arcade/v4/size_02.png" width="32px" height="32px"/>
        </div>
        <br/>
        <div id="edit-times" style="left:0px;">
          
          <div>
            <label for="edit-25"> 25</label>
            <input size="6" name="edit-25" id="edit-25" type="text"/>
          </div>
          <div>
            <label for="edit-50"> 50</label>
            <input size="6" name="edit-50" id="edit-50" type="text"/>
          </div>
          <div>
            <label for="edit-100">100</label>
            <input size="6" name="edit-100" id="edit-100" type="text"/>
          </div>
          <div>
            <label for="edit-ALL">ALL</label>
            <input size="6" name="edit-ALL" id="edit-ALL" type="text"/>
          </div>
        </div>

        <div id="edit-customsplit" style="border-top:1px solid black">

        </div>

        <div id="edit-split" style="position:fixed;left:10%;bottom:0%;">
          <label for="edit-splitscore">New Split</label>
          <input size="6" name="edit-splitscore" id="edit-splitscore" type="number" placeholder="Score"/>
          <button id="edit-addsplit">Add</button>
        </div>
      `
      document.body.appendChild(editBox)
      document.getElementById('close-box').addEventListener('click', function() { document.getElementById('edit-box').remove() })

      const customSplitSectionDiv = document.getElementById('edit-customsplit')
      const newSplitInput = document.getElementById('edit-splitscore')
      newSplitInput.addEventListener('keydown', function() {
        setTimeout(function() { 
          newSplitInput.value = newSplitInput.value.replace(/\D/g, '')
        }, 1)
      })
      document.getElementById('edit-addsplit').addEventListener('click', function() {
        const splitScore = document.getElementById('edit-splitscore').value
        if(!+splitScore) return
        
        const splitDiv = document.createElement('div')
        
        const splitName = `edit-${splitScore}`

        const splitLabel = document.createElement('label')
        splitLabel.for = splitName
        splitLabel.innerText = splitScore.toString().padStart(3, ' ') + ' '
        
        const splitInput = document.createElement('input')
        splitInput.id = splitInput.name = splitName
        splitInput.size = 6
        splitInput.type = 'text'

        if(!window._splits.includes(+splitScore)) window._splits.push(+splitScore)

        function handleChange() {
          const val = splitInput.value.split(':')
          let time = 0
          for(let i = 1; i <= val.length; i++) {
            let s = i === 1 ? 1 : i === 2 ? 60 : i === 3 ? 3600 : 0
            time += s * +val.at(-i)
          }

          const key = splitInput.name.replace('edit-', '')

          const _mode  = getSelected('#edit-mode',  'sel')
          const _count = getSelected('#edit-count', 'sel')
          const _speed = getSelected('#edit-speed', 'sel')
          const _size  = getSelected('#edit-size',  'sel')

          if(!_pb[_mode]) _pb[_mode] = {}
          if(!_pb[_mode][_count]) _pb[_mode][_count] = {}
          if(!_pb[_mode][_count][_speed]) _pb[_mode][_count][_speed] = {}
          if(!_pb[_mode][_count][_speed][_size]) _pb[_mode][_count][_speed][_size] = {}
          _pb[_mode][_count][_speed][_size][key] = time

          localStorage._snake_pb = JSON.stringify(_pb)


          splitInput.value = time === 0 ? '' : time.timeFormat()
        }

        splitInput.addEventListener('keydown', function(evt) {
          if(evt.key === 'Escape' || evt.key === 'Enter') handleChange()

          setTimeout(function() { 
            splitInput.value = splitInput.value.replace(/[^\d.:]/g, '')
          }, 1)
        })
        splitInput.addEventListener('change', handleChange)

        splitDiv.appendChild(splitLabel)
        splitDiv.appendChild(splitInput)

        customSplitSectionDiv.appendChild(splitDiv)

      })
      
      const divs = ['edit-mode', 'edit-count', 'edit-speed', 'edit-size'].map(q => document.getElementById(q))
      const selectors = ['#trophy', '#count', '#speed', '#size']
      for(let j = 0; j < 4; j++) {
        let temp = [...document.querySelector(selectors[j]).children]
        temp.forEach((q, i) => {
          if(_r = divs[j].children[i]) {
            _r.style.border = i === getSelected(selectors[j]) ? '4px ridge #af4490ff' : '4px ridge #00000000'
            _r.className = i === getSelected(selectors[j]) ? 'sel' : 'uns'
          }
        })
      }
        

      for(const inp of document.getElementById('edit-times').children) {
        const el = inp.children[1]

        function handleChange() {
          const val = el.value.split(':')
          let time = 0
          for(let i = 1; i <= val.length; i++) {
            let s = i === 1 ? 1 : i === 2 ? 60 : i === 3 ? 3600 : 0
            time += s * +val.at(-i)
          }

          const key = el.name.replace('edit-', '')

          const _mode  = getSelected('#edit-mode',  'sel')
          const _count = getSelected('#edit-count', 'sel')
          const _speed = getSelected('#edit-speed', 'sel')
          const _size  = getSelected('#edit-size',  'sel')

          if(!_pb[_mode]) _pb[_mode] = {}
          if(!_pb[_mode][_count]) _pb[_mode][_count] = {}
          if(!_pb[_mode][_count][_speed]) _pb[_mode][_count][_speed] = {}
          if(!_pb[_mode][_count][_speed][_size]) _pb[_mode][_count][_speed][_size] = {}
              _pb[_mode][_count][_speed][_size][key] = time 

          localStorage._snake_pb = JSON.stringify(_pb)


          el.value = time === 0 ? '' : time.timeFormat()
        }

        el.addEventListener('keydown', function(evt) {
          if(evt.key === 'Escape' || evt.key === 'Enter') handleChange()

          setTimeout(function() { 
            el.value = el.value.replace(/[^\d.:]/g, '')
          }, 1)
        })

        el.addEventListener('change', handleChange)
      }

      function updateToMode() {
        
        const _mode  = getSelected('#edit-mode',  'sel')
        const _count = getSelected('#edit-count', 'sel')
        const _speed = getSelected('#edit-speed', 'sel')
        const _size  = getSelected('#edit-size',  'sel')

        const time = _pb[_mode] && _pb[_mode][_count] && _pb[_mode][_count][_speed] && _pb[_mode][_count][_speed][_size] ? _pb[_mode][_count][_speed][_size] : {}

        for(const inp of document.getElementById('edit-times').children) {
          const el = inp.children[1]
          const key = el.name.replace('edit-', '')


          el.value = time[key] ? time[key].timeFormat() : ''

        }

        for(let i = customSplitSectionDiv.children.length - 1; i >= 0; i--) {
          customSplitSectionDiv.removeChild(customSplitSectionDiv.children[i])
        }

        for(const [_splitName, _splitTime] of Object.entries(time)) {
          if(!['25', '50', '100', 'ALL'].includes(_splitName)) {
            const splitDiv = document.createElement('div')
            const splitName = `edit-${_splitName}`

            const splitLabel = document.createElement('label')
            splitLabel.for = splitName
            splitLabel.innerText = _splitName.padStart(3, ' ') + ' '
            
            const splitInput = document.createElement('input')
            splitInput.id = splitInput.name = splitName
            splitInput.size = 6
            splitInput.type = 'text'
            splitInput.value = +_splitTime ? _splitTime.timeFormat() : ''

            if(!window._splits.includes(+_splitName)) window._splits.push(+_splitName)


            function handleChange() {
              const val = splitInput.value.split(':')
              let time = 0
              for(let i = 1; i <= val.length; i++) {
                let s = i === 1 ? 1 : i === 2 ? 60 : i === 3 ? 3600 : 0
                time += s * +val.at(-i)
              }
    
              const key = splitInput.name.replace('edit-', '')
    
              const _mode  = getSelected('#edit-mode',  'sel')
              const _count = getSelected('#edit-count', 'sel')
              const _speed = getSelected('#edit-speed', 'sel')
              const _size  = getSelected('#edit-size',  'sel')
    
              if(!_pb[_mode]) _pb[_mode] = {}
              if(!_pb[_mode][_count]) _pb[_mode][_count] = {}
              if(!_pb[_mode][_count][_speed]) _pb[_mode][_count][_speed] = {}
              if(!_pb[_mode][_count][_speed][_size]) _pb[_mode][_count][_speed][_size] = {}
              _pb[_mode][_count][_speed][_size][key] = time 
    
              localStorage._snake_pb = JSON.stringify(_pb)
    
              splitInput.value = time === 0 ? '' : time.timeFormat()
            }
    
            splitInput.addEventListener('keydown', function(evt) {
              if(evt.key === 'Escape' || evt.key === 'Enter') handleChange()
    
              setTimeout(function() { 
                splitInput.value = splitInput.value.replace(/[^\d.:]/g, '')
              }, 1)
            })
            splitInput.addEventListener('change', handleChange)
    

            splitDiv.appendChild(splitLabel)
            splitDiv.appendChild(splitInput)

            customSplitSectionDiv.appendChild(splitDiv)

          }
        }
      }
      updateToMode()


      for(const id of ['edit-mode', 'edit-count', 'edit-speed', 'edit-size'])
        for(const opt of document.getElementById(id).children) {
          opt.addEventListener('click', function() {
            for(const opt1 of document.getElementById(id).children) {
              opt1.style.border = '4px ridge #00000000'
              opt1.className = 'uns'
            }
            opt.style.border = '4px ridge #af4490ff'
            opt.className = 'sel'

            updateToMode()
          })
        }
        
      


    }
  })



  

}

timer.alterSnakeCode = function(code) {
  
  code = code.replace('--:--:---','-')

  const resetFunction = code.match(
    /[a-zA-Z0-9_$]{1,8}\n?\.\n?prototype\n?\.\n?reset\n?=\n?function\(\)\n?{\n?this\n?\.\n?[a-zA-Z0-9_$]{1,8}\n?=\n?\[\];\n?var( |\n)a\n?=\n?[a-zA-Z0-9_$]{1,8}\n?\(\n?this\n?\.\n?settings[^]*?new( |\n)Set\n?\)\n?}/
  )[0]

  const modeKey = resetFunction.match(
    /0===this\.settings\.[a-zA-Z0-9_$]{1,8}/
  )[0].replace('0===this.settings.', '')
  const countKey = resetFunction.match(
    /2===this\.settings\.[a-zA-Z0-9_$]{1,8}/
  )[0].replace('2===this.settings.', '')
  const speedKey = code.match(
    /0!==a\.settings\.[a-zA-Z0-9_$]{1,8}\?-10:0/
  )[0].replace('0!==a.settings.', '').replace('?-10:0', '')
  const sizeKey = resetFunction.match(
    /1!==this\.settings\.[a-zA-Z0-9_$]{1,8}/
  )[0].replace('1!==this.settings.', '')

  code = code.replace(resetFunction,
    resetFunction.replace(
      'function(){',
      `
      function() {

        const _mode  = getSelected('#trophy')
        const _count = getSelected('#count')
        const _speed = getSelected('#speed')
        const _size  = getSelected('#size')

        window._run = {}
        window._run[_mode] = {}
        window._run[_mode][_count] = {}
        window._run[_mode][_count][_speed] = {}
        window._run[_mode][_count][_speed][_size] = {}


        if(!window._pb) window._pb = {}
        if(!window._pb[_mode]) window._pb[_mode] = {}
        if(!window._pb[_mode][_count]) window._pb[_mode][_count] = {}
        if(!window._pb[_mode][_count][_speed]) window._pb[_mode][_count][_speed] = {}
        if(!window._pb[_mode][_count][_speed][_size]) window._pb[_mode][_count][_speed][_size] = {}

        for(let __ind = window._splits.length - 1; __ind >= 0; __ind--) {
          if(!window._pb[_mode][_count][_speed][_size][window._splits[__ind]]) {
            window._splits.splice(__ind, 1)
          }
        }

        for(let __key of Object.keys(window._pb[_mode][_count][_speed][_size])) {
          if(!['25','50','100','ALL'].includes(__key) && !window._splits.includes(+__key)) {
            window._splits.push(+__key)
          }
        }


        const deltaDiv = document.getElementById('timerDelta')
        deltaDiv.innerHTML = '-'.color('white')

      `
    )  
  )
  
  
  const timeFormatFunction = code.match(
    /[a-zA-Z0-9_$]{1,8}=function\(a\){a=Math\.floor\(a\);if\(0>=a\)return[^]*?3,"0"\)}/
  )[0]

  code = code.replace(timeFormatFunction,
    timeFormatFunction.replace(
      '{',
      `{
        const _speed = getSelected('#speed')
        const _minTime = _speed === 0 ? 135 : _speed === 1 ? 89 : 179
      `
    ).replace(
      'if(0>=a)return"00:00:000";',
      'if(_minTime >= a)return "00:00.000";',
    ).replace(
      'if(600<=b)return"9:59:59:999";',
      ''
    ).replace(
      'return(0===c?"":c.toString()+":")+(b%60).toString().padStart(2,"0")+":"+(Math.floor(a/1E3)%60).toString().padStart(2,"0")+":"+(a%1E3).toString().padStart(3,"0")',
      'return(0===c?"":c.toString()+":")+(b%60).toString().padStart(2,"0")+":"+(Math.floor(a/1E3)%60).toString().padStart(2,"0")+"."+(a%1E3).toString().padStart(3,"0")'
    )
  )

  const stuffBlock = code.match(
    /[a-zA-Z0-9_$]{1,8}=this\.header,[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8},[a-zA-Z0-9_$]{1,8}=this\.ticks,[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8};/
  )[0]
  const score = stuffBlock.match(/header,[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8}/)[0].replace(/header,[a-zA-Z0-9_$]{1,8}=/,'')
  const ticks = stuffBlock.match(/[a-zA-Z0-9_$]{1,8}=this\.ticks/)[0].replace(/[a-zA-Z0-9_$]{1,8}=/,'')
  const dt    = stuffBlock.match(/ticks,[a-zA-Z0-9_$]{1,8}=this\.[a-zA-Z0-9_$]{1,8}/)[0].replace(/ticks,[a-zA-Z0-9_$]{1,8}=/,'')
  


  const splitStuff = code.match(
    /if\(25===[a-zA-Z0-9_$]{1,8}\|\|50===[a-zA-Z0-9_$]{1,8}\|\|100===[a-zA-Z0-9_$]{1,8}\)/
  )[0]

  code = code.replace(
    splitStuff,
    `
    if([25, 50, 100].includes(${score}) || window._splits.includes(${score})) {
      const deltaDiv = document.getElementById('timerDelta')
      const _mode  = getSelected('#trophy')
      const _count = getSelected('#count')
      const _speed = getSelected('#speed')
      const _size  = getSelected('#size')

      const _split = ${ticks} * ${dt} * 1e-3

      window._run[_mode][_count][_speed][_size][${score}] = _split
      
      const _delta = _split - window._pb[_mode][_count][_speed][_size][${score}]
      deltaDiv.innerHTML = _delta > 0 ? ('+'+_delta.timeFormat()).color('red') : _delta < 0 ? ('-'+(-_delta).timeFormat()).color('green') : '-'.color('white')
    }
    
    if([25, 50, 100].includes(${score}) || window._splits.includes(${score}))
    
    `
  )

  const winStuff = code.match(
    /_\.[a-zA-Z0-9_$]{1,8}\([a-zA-Z0-9_$]{1,8}\.[a-zA-Z0-9_$]{1,8},"ALL"\);/
  )[0]

  code = code.replace(
    winStuff,
    `
    ${winStuff}
    const deltaDiv = document.getElementById('timerDelta')
    const _mode  = getSelected('#trophy')
    const _count = getSelected('#count')
    const _speed = getSelected('#speed')
    const _size  = getSelected('#size')

    const _time = ${ticks} * ${dt} * 1e-3

    window._run[_mode][_count][_speed][_size]['ALL'] = _time
    
    const _delta = _time - window._pb[_mode][_count][_speed][_size]['ALL']
    deltaDiv.innerHTML = _delta > 0 ? ('+'+_delta.timeFormat()).color('red') : _delta < 0 ? ('-'+(-_delta).timeFormat()).color('green') : '-'.color('white')
    
    
    if(_delta < 0 || isNaN(_delta)) {
      window._pb[_mode][_count][_speed][_size] = window._run[_mode][_count][_speed][_size]
      localStorage._snake_pb = JSON.stringify(window._pb)
    }
    
    
    `
  )



  return code
}


timer.runCodeAfter = function() {
  
}