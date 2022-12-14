// this sits inside ProfileContainer and holds everything related to the character being displayed
// character info and inventory are separate components that will be updated separately
import { Inventory } from "./Inventory"
import { CharacterDisplay } from "./CharacterDisplay"

export const CharacterDetails = (props) => {
    const {user, character, invUpdated, setMaterialId, setRecipeId, setRecipeListShow} = props

    return (
        <div>
            <CharacterDisplay character={character} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            <Inventory user={user} character={character} invUpdated={invUpdated} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
        </div>
    )
}