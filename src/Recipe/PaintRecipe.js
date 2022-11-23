export default function PaintRecipe({ steps, ingred }) {

    var i = 1;
    return (
        <div>
            <div className='chatScreenIngred'>
                {ingred.map(e =>
                    <li className='chatBubble' key={e}>{e}</li>)
                }
            </div>
            <div className='chatScreenRecipe'>
                {steps.map(e =>
                    <li className='chatBubble' key={e}>Step {i++}. {e}</li>)
                }
            </div>
        </div>
    )
}