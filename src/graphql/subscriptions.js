/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateFoodCategory = /* GraphQL */ `
  subscription OnCreateFoodCategory {
    onCreateFoodCategory {
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
export const onUpdateFoodCategory = /* GraphQL */ `
  subscription OnUpdateFoodCategory {
    onUpdateFoodCategory {
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
export const onDeleteFoodCategory = /* GraphQL */ `
  subscription OnDeleteFoodCategory {
    onDeleteFoodCategory {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
          price
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
          price
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
          price
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateLocationMenu = /* GraphQL */ `
  subscription OnCreateLocationMenu {
    onCreateLocationMenu {
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
export const onUpdateLocationMenu = /* GraphQL */ `
  subscription OnUpdateLocationMenu {
    onUpdateLocationMenu {
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
export const onDeleteLocationMenu = /* GraphQL */ `
  subscription OnDeleteLocationMenu {
    onDeleteLocationMenu {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
      id
      userSub
      quantity
      price
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
      id
      userSub
      quantity
      price
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
      id
      userSub
      quantity
      price
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
