/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      addresses
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      addresses
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      addresses
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createFoodCategory = /* GraphQL */ `
  mutation CreateFoodCategory(
    $input: CreateFoodCategoryInput!
    $condition: ModelFoodCategoryConditionInput
  ) {
    createFoodCategory(input: $input, condition: $condition) {
      id
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateFoodCategory = /* GraphQL */ `
  mutation UpdateFoodCategory(
    $input: UpdateFoodCategoryInput!
    $condition: ModelFoodCategoryConditionInput
  ) {
    updateFoodCategory(input: $input, condition: $condition) {
      id
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteFoodCategory = /* GraphQL */ `
  mutation DeleteFoodCategory(
    $input: DeleteFoodCategoryInput!
    $condition: ModelFoodCategoryConditionInput
  ) {
    deleteFoodCategory(input: $input, condition: $condition) {
      id
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      products {
        items {
          id
          name
          categoryID
          description
          primaryImage
          images
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      name
      categoryID
      description
      primaryImage
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      atLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      atCarts {
        items {
          id
          userSub
          quantity
          productID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      name
      categoryID
      description
      primaryImage
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      atLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      atCarts {
        items {
          id
          userSub
          quantity
          productID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      name
      categoryID
      description
      primaryImage
      images
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        products {
          nextToken
          startedAt
        }
      }
      atLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      atCarts {
        items {
          id
          userSub
          quantity
          productID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      street
      unit
      city
      state
      zip
      phone
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      menuLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      street
      unit
      city
      state
      zip
      phone
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      menuLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      street
      unit
      city
      state
      zip
      phone
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      menuLocations {
        items {
          id
          locationID
          productID
          price
          Stock
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createLocationMenu = /* GraphQL */ `
  mutation CreateLocationMenu(
    $input: CreateLocationMenuInput!
    $condition: ModelLocationMenuConditionInput
  ) {
    createLocationMenu(input: $input, condition: $condition) {
      id
      locationID
      productID
      price
      Stock
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      location {
        id
        name
        street
        unit
        city
        state
        zip
        phone
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        menuLocations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateLocationMenu = /* GraphQL */ `
  mutation UpdateLocationMenu(
    $input: UpdateLocationMenuInput!
    $condition: ModelLocationMenuConditionInput
  ) {
    updateLocationMenu(input: $input, condition: $condition) {
      id
      locationID
      productID
      price
      Stock
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      location {
        id
        name
        street
        unit
        city
        state
        zip
        phone
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        menuLocations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteLocationMenu = /* GraphQL */ `
  mutation DeleteLocationMenu(
    $input: DeleteLocationMenuInput!
    $condition: ModelLocationMenuConditionInput
  ) {
    deleteLocationMenu(input: $input, condition: $condition) {
      id
      locationID
      productID
      price
      Stock
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      location {
        id
        name
        street
        unit
        city
        state
        zip
        phone
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        menuLocations {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productID
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productID
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productID
      orderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        name
        categoryID
        description
        primaryImage
        images
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          type
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        atLocations {
          nextToken
          startedAt
        }
        atCarts {
          nextToken
          startedAt
        }
      }
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
