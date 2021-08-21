import React from react

const MachineInput = (props) => {
    return (props.machinee.MachineInput((val, idx) => {

        let machineType = 'mtype-$(idx)', M_ex = 'ex-$(idx)'
        return (

            <div>
                            
                <div class="form-group">
                <label>Wettbewerb</label> <input type="text" class="form-control" name="text_company" placeholder="Placeholder Textfeld"></input>
                </div>
            
                <div class="form-group">
                <label>Maschinentyp</label> <input type="text" class="form-control" name="text_machineType" placeholder="Gleitschleifen"></input>
                </div>
            
                <div class="form-group">
                <label>Bezeichnung</label> <input type="text" class="form-control" name="text_machineid" placeholder=""></input>
                </div>
            
                <div class="form-group">
                <label>Baujahr</label> <input type="text" class="form-control" name="text_year" placeholder="Placeholder Textfeld"></input>
                </div>

                
                <div class="form-group">
                <label>Zustand</label>
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio_state" value="0"> <label class="form-check-label">Unbekannt</label></input>
                </div>
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio_state" value="5"> <label class="form-check-label">Gut</label></input>
                </div>
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio_state" value="3"> <label class="form-check-label">Mittel</label></input>
                </div>
            
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio_state" value="1"> <label class="form-check-label">Schlecht</label></input>
                </div>
                </div>

                <div class="form-group">
                    <label>Analge erneuerungsbedürftig?</label> <select class="form-control" name="selectbox_old">
                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
                </div>

                <div class="form-old">
                    <label>Interesse an Retrofit? (Karte abgegeben?)</label> <select class="form-control" name="selectbox_retrofit">
                    <option value="no">
                        Nein
                    </option>
                
                    <option value="yes">
                        Ja
                    </option>
                    </select>
                </div>   

                <div class="form-old">
                    <label>Interesse an TuneUp?  (Karte abgegeben?)</label> <select class="form-control" name="selectbox_tuneup">
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