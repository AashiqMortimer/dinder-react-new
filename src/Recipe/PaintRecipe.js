export default function PaintRecipe({ steps, ingred, meal }) {

    var i = 1;
    return (
        <div class="chatScreenContainer">
            <div className='chatScreenIngred'>
                {ingred.map(e =>
                    <li className='ingredBubble' key={e}>{e}</li>)
                }
            </div>
            <div className='chatScreenRecipe ' style={{ backgroundImage: `url(${meal.image})` }}>
                {steps.map(e =>
                    <li className='chatBubble' key={e}>Step {i++}. {e}</li>)
                }
            </div>
        </div>
    )
}