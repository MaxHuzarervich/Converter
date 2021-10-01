import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import {Dispatch} from 'redux';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    CurrencyReducersTypes,
    СhangeCurrentCurrencyAC
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch} from 'react-redux';

const CurrencyEContainer: React.FC<TProps> = props => {
//
//     const {
//         currencies,
//         currentCurrency,
//         isBuying,
//         amountOfBYN,
//         amountOfCurrency,
//         setCurrencyAmount,
//         setAction,
//         changeCurrency,
//     } = props;

    // const {
    //     currencies,
    //     currentCurrency,
    //     isBuying,
    //     amountOfBYN,
    //     amountOfCurrency,
    //     ChangeActionAC,
    //     ChangeCurrencyFieldAC,
    //     СhangeCurrentCurrencyAC
    // } = props;

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
    } = props;

    const dispatch = useDispatch()

    let currencyRate: number = 0; //пробегаемся по массиву валют
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate; //покупка или продажа
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;//чтобы пользователь вводил только число
        if (!isFinite(+value)) return;  //isFinite ф-ция проверяет является ли полученное число числом или нет
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') { //если бел рубли и значение пустое то мы сетаем пустое значение в два инпута
                if (value === '') {
                    // setCurrencyAmount(value, value);
                    // ChangeCurrencyFieldAC(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {             //если не пустое то выполняем это
                    //полученное число из инпута явл строкой, +Number преобразует в число и округляем его до двух знаков
                    // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    // ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
                }
            } else {
                if (value === '') {
                    // setCurrencyAmount(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value));
                } else {
                    // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
        // e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
        e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        e.currentTarget.dataset.currency && dispatch(СhangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};

// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>): any => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(ChangeActionAC(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(СhangeCurrentCurrencyAC(currency));
//         },
//     };
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);
// const connector = connect(mapStateToProps, {ChangeActionAC, ChangeCurrencyFieldAC, СhangeCurrentCurrencyAC});
const connector = connect(mapStateToProps, {});

type TProps = ConnectedProps<typeof connector>;

export default connector(CurrencyEContainer);

