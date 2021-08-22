import React from "react"



const MachineInput = (props) => {

    return (props.machines.map((val, idx) => {

        let machineType = `mmanu-${idx}`, mAge = `mage-${idx}`

        return (

            <div class="machineData" key={idx}>   
                            
                <div class="form-group">
                    <label>Wettbewerb</label> <input 
                        id={machineType} 
                        type="text"
                        data-id={idx}
                        name={machineType} 
                        value={props.machines[idx].manufacturer} 
                    />
                </div>
            
                <div class="form-group">
                <label>Maschinentyp</label> <input type="text" class="form-control" name="text_machineType" placeholder="Gleitschleifen"></input>
                </div>
            
                <div class="form-group">
                <label>Bezeichnung</label> <input type="text" class="form-control" name="text_machineid" placeholder=""></input>
                </div>
            
                <div class="form-group">
                <label>Baujahr</label> <input
                    type="text" 
                    name={mAge}
                    data-id={idx}
                    id={mAge}
                    value={props.machines[idx].age} 
                    />
                </div>

                
                <div className="radio">
          <label>
            <input
              type="radio"
              value="unknown"
              checked={props.machines[idx].state === "unknown"}
              //onChange={formik.handleChange}
            />
            Unbekannt
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="good"
              checked={props.machines[idx].state === "good"}
              //onChange={props.machines[idx].state = "good"}
            />
            Gut
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="middle"
              checked={props.machines[idx].state === "middle"}
              //onChange={props.machines[idx].state = "middle"}
            />
            Mittel
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="bad"
              //onChange={props.machines[idx].state = "bad"}
              checked={props.machines[idx].state === "bad"}
              
            />
            Schlecht
          </label>
        </div>
        <div>
          Selected option is : {props.machines[idx].state}
        </div>

                <div class="form-group">
                    <label>Analge erneuerungsbedürftig?</label> <select class="form-control" name="selectbox_old">
                    <option value="unknown">
                        Bitte Wählen
                    </option>

                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
                </div>

                <div class="form-old">
                    <label>Interesse an Retrofit?<div>(Karte abgegeben?)</div></label> <select class="form-control" name="selectbox_retrofit">
                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
                </div>   

                <div class="form-old">
                    <label>Interesse an TuneUp?  <div>(Karte abgegeben?)</div></label> <select class="form-control" name="selectbox_tuneup">
                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
                </div>


                <div class="form-old">
                    <label>Neuinvestition geplant</label> <input type="text" class="form-control" name="text_investment" placeholder="Nein"></input>
                </div>
                


                <div class="form-group">
                    <label>Sonstiges</label> 
                    <textarea class="form-control" name="textarea_others" placeholder="Diverses">
                    </textarea>
                </div>

            </div>
        )
    })
    )


}
export default MachineInput