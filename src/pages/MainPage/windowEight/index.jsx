import './style.css'

import CategoryBox from '../../../elements/category'
import SecondaryBtn from '../../../elements/btns/secondary'
import img from './people.jpg'

const WindowEight = () => {

    const text = [
        (
            <p>
              <span style={{color: 'var(--bgSearchImg)'}}>Лидеры</span> на игровом рынке
            </p>
        ),
        (
            <p>
               Собрали более <span style={{color: 'var(--bgSearchImg)'}}>50 000 ПК</span>
            </p>
        ),
        (
            <p>
                Провели <span style={{color: 'var(--bgSearchImg)'}}>32 киберспортивных</span> турнира 
            </p>
        ),
        (
            <p>
              <span style={{color: 'var(--bgSearchImg)'}}>Топовые блогеры</span> выбирают нас
            </p>
        ),
        (
            <p>
              Оборудовали <span style={{color: 'var(--bgSearchImg)'}}>60 компьютерных клубов</span> под ключ
            </p>
        )
    ]
      
    return (
        <div className="windowEight">
            <h3 className="titleH">о компании</h3>
            <div className='windowEightBody'>
                <div className='windowEightBodyUp'>
                    <div className='windowEightBodyUpLeft'>
                        <img src={img} alt="" />
                    </div>
                    <div className='windowEightBodyUpRight'>
                        <div className='wEightRightUp'>
                            <p>Компания UPGrade</p>
                        </div>
                        <div className='wEightRightDown'>
                            <div>
                                <p>Компания UPGrade была основана в 2009 году. Мы — официальный партнер таких известных технологических гигантов как NVIDIA, Intel, Microsoft. Нам также удалось реализовать несколько успешных совместных проектов с такими известными игровыми кампаниями как Wargaming, UbiSoft, Electronic Arts, Bethesda и Mail.Games.</p>
                            </div>
                            <div>
                                <p>Главный офис UPGrade и производственный центр расположены в Москве. Шоурум со компьютерами и периферией находятся в Москве. Мы осуществляем доставку компьютеров по всей России и миру. Наша компания работает как с частными, так и с юридическими лицами.</p>
                            </div>
                            <div>
                                <p>Создавать лучшие компьютеры, которые будут дарить геймерами творческим профессионалам удовольствие от использования.</p>
                            </div>
                        <div className='wEightRightDownBtn'>
                            <SecondaryBtn text='Узнать больше'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='windowEightBodyDown1'>
                    <div className='windowEightBodyDown'>
                        <div className='box2'>
                            <CategoryBox title={text[0]}/>
                            <CategoryBox title={text[1]}/>
                            <CategoryBox title={text[2]}/>
                        </div>
                        <div className='box3'>
                            <CategoryBox title={text[3]}/>
                            <CategoryBox title={text[4]}/>
                        </div>
                    </div>
                </div>
                <div className='windowEightBodyDown2'>
                    <div className='windowEightBodyDown'>
                        <CategoryBox title={text[0]}/>
                        <CategoryBox title={text[1]}/>
                        <CategoryBox title={text[2]}/>
                        <CategoryBox title={text[3]}/>
                        <CategoryBox title={text[4]}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default WindowEight;