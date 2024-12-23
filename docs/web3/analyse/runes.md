# 铭文(Runes)

## 1. Ordinals

Ordinals 是一个基于比特币区块链的协议，允许将数据（如文本、图片、音频等）永久刻印到比特币的最小单位——聪（satoshi）上。这种技术扩展了比特币的功能，使得每个聪都可以携带额外的信息，从而赋予它类似 NFT（非同质化代币）的功能。

### 特点
- **铭文（Inscription）**：在聪上刻印任意数据，数据不可篡改。
- **绑定性**：刻印数据与特定聪绑定，聪的转移会带着其铭文一起转移。
- **无需侧链**：直接使用比特币主网，不需要额外的区块链。

### 应用场景
- **数字艺术**：在比特币上创建类似 NFT 的数字艺术品。
- **收藏品**：每个铭文聪都可作为独特的收藏品。
- **数据记录**：记录永久性的信息，如证书或历史事件。

### 工作原理
Ordinals 使用比特币的序列号系统，为每个聪分配一个唯一标识符，并通过 Taproot 脚本将铭文数据嵌入到比特币交易中。


## 2. Atomicals

Atomicals 是一个基于比特币的协议，专注于创建和管理比特币上的数字资产和代币。它进一步扩展了 Ordinals 的功能，使用户能够创建更多种类的资产和互动。

### 特点
- **数字资产支持**：允许用户发行和管理自己的资产或代币。
- **全生命周期管理**：支持资产的创建、交易、转移和销毁。
- **基于 Ordinals**：Atomicals 使用 Ordinals 技术为每个资产提供唯一标识符。

### 应用场景
- **代币化物品**：在比特币网络上创建代币，用于代表实物物品或权利。
- **去中心化金融（DeFi）**：支持基于比特币的去中心化金融产品，如稳定币、贷款协议等。
- **数字身份**：在比特币上创建去中心化身份（DID）。

### 工作原理
Atomicals 使用 Ordinals 机制，并添加额外的协议层，用于定义资产的属性、操作逻辑和生命周期管理。


## 3. Fractal

Fractal 是一个旨在将智能合约和去中心化应用（DApps）带到比特币网络的协议。它通过增强比特币的功能，使其能够支持复杂的应用场景。

### 特点
- **智能合约支持**：通过 Fractal，开发者可以在比特币上编写和部署智能合约。
- **去中心化应用（DApps）**：允许开发者构建类似以太坊上的 DApps，但使用比特币作为底层。
- **高安全性**：利用比特币主网的安全性和稳定性。

### 应用场景
- **去中心化市场**：在比特币网络上创建去中心化交易平台。
- **区块链游戏**：支持基于比特币的游戏和奖励系统。
- **数据存储**：在比特币上存储和管理去中心化数据。

### 工作原理
Fractal 扩展了比特币的原生功能，通过额外的协议层实现复杂的智能合约逻辑，同时确保与比特币主网的兼容性。


## 4. Runes (铭文)

**Runes（铭文）** 是 Ordinals 技术的一部分，强调在比特币上进行铭文操作，通过在聪中嵌入数据来实现数据的永久存储。

### 特点
- **低门槛**：不需要额外的工具即可使用比特币进行铭文。
- **不可篡改**：铭文数据一旦写入比特币区块链，就不可更改或删除。
- **灵活性**：可以用于多种类型的数据，如文本、图片、音频等。

### 应用场景
- **艺术创作**：数字艺术作品的存储和交易。
- **知识产权保护**：记录创作者信息和版权。
- **永久存证**：用于法律文件、证书、历史记录的存档。

### 工作原理
Runes 使用比特币交易中的额外数据字段，通过 Ordinals 系统为每个铭文创建唯一标识符，并绑定到特定聪上。


| 协议/技术  | 核心功能                          | 应用场景                                    |
| ----------- | --------------------------------- | ----------------------------------------- |
| **Ordinals** | 在聪上刻印数据，创建数字收藏品       | 数字艺术、收藏品、数据记录                 |
| **Atomicals** | 创建和管理数字资产和代币            | 代币化物品、DeFi、数字身份                 |
| **Fractal**   | 提供智能合约支持和去中心化应用开发    | DApps、去中心化市场、区块链游戏             |
| **Runes**     | Ordinals 的核心铭文功能             | 数字艺术、永久存证、知识产权保护            |

