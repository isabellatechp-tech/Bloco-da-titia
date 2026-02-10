"use client";
import { useEffect, useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { getApiUrl } from '../utils/api';
import './loja.css';

export default function Loja() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    try {
      setLoading(true);
      const apiUrl = getApiUrl();
      const response = await fetch(`${apiUrl}/api/loja`);
      if (!response.ok) throw new Error('Erro ao buscar produtos');
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      console.error('Erro:', error);
      setErro('Não foi possível conectar ao backend. Usando dados mockados.');
      // Dados mockados como fallback
      setProdutos([
        { id: 1, nome: "Garrafinha de Água", preco: (Math.random() * 10 + 5).toFixed(2), img: "https://picsum.photos/300/300?random=1" },
        { id: 2, nome: "Abadá do Bloco", preco: (Math.random() * 50 + 30).toFixed(2), img: "https://picsum.photos/300/300?random=2" },
        { id: 3, nome: "Chaveiro do Bloco", preco: (Math.random() * 20 + 10).toFixed(2), img: "https://picsum.photos/300/300?random=3" }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleComprarAgora = (produto) => {
    addToCart(produto);
    setShowCart(true);
  };

  const handleCheckout = () => {
    alert(`Checkout simulado! Total: R$ ${getCartTotal().toFixed(2)}\n\nEm uma aplicação real, você seria redirecionado para o pagamento.`);
    clearCart();
    setShowCart(false);
  };

  return (
    <div className="loja-container">
      <div className="loja-header">
        <h1>🛒 Loja do Bloco</h1>
        <p>Produtos exclusivos para você celebrar o carnaval!</p>
      </div>

      {loading && (
        <div className="loading">
          <p>Carregando produtos...</p>
        </div>
      )}

      {erro && (
        <div className="erro-message">
          <p>⚠️ {erro}</p>
        </div>
      )}

      {!loading && (
        <>
          <div className="produtos-grid">
            {produtos.map((produto) => (
              <div key={produto.id} className="produto-card card">
                <div className="produto-imagem">
                  <img src={produto.img} alt={produto.nome} />
                </div>
                <div className="produto-info">
                  <h3>{produto.nome}</h3>
                  <p className="produto-preco">R$ {parseFloat(produto.preco).toFixed(2)}</p>
                  <div className="produto-botoes">
                    <button 
                      className="btn btn-primary"
                      onClick={() => handleComprarAgora(produto)}
                    >
                      Comprar Agora
                    </button>
                    <button 
                      className="btn btn-secondary"
                      onClick={() => addToCart(produto)}
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carrinho */}
          <div className={`carrinho-sidebar ${showCart ? 'open' : ''}`}>
            <div className="carrinho-header">
              <h2>🛒 Carrinho ({cart.length} {cart.length === 1 ? 'item' : 'itens'})</h2>
              <button className="close-cart" onClick={() => setShowCart(false)}>✕</button>
            </div>
            
            {cart.length === 0 ? (
              <div className="carrinho-vazio">
                <p>Seu carrinho está vazio</p>
              </div>
            ) : (
              <>
                <div className="carrinho-itens">
                  {cart.map((item) => (
                    <div key={item.id} className="carrinho-item">
                      <img src={item.img} alt={item.nome} />
                      <div className="item-info">
                        <h4>{item.nome}</h4>
                        <p>R$ {parseFloat(item.preco).toFixed(2)}</p>
                        <div className="item-quantidade">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                      <button 
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
                <div className="carrinho-footer">
                  <div className="carrinho-total">
                    <strong>Total: R$ {getCartTotal().toFixed(2)}</strong>
                  </div>
                  <button className="btn btn-success" onClick={handleCheckout}>
                    Finalizar Compra
                  </button>
                </div>
              </>
            )}
          </div>

          {showCart && <div className="carrinho-overlay" onClick={() => setShowCart(false)} />}
        </>
      )}
    </div>
  );
}

