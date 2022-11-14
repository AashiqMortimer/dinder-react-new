

export default function RecipeBreakdown(recipe) {
    return (
        <div className='messages'>
            {recipe.map(step => (
                recipe.name ? (
                    <div className='chatScreen__message'>
                        <Avatar
                            className='chatScreen__image'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
</div>)

    )
}

